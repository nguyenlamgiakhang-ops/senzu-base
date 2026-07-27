import ImageExtension from "@tiptap/extension-image";

const MIN_WIDTH = 60;

function alignStyle(align: string | null): string {
  // display:table (not block) keeps the box shrink-to-fit around the image —
  // same as inline-block — while still being a block-level box that margin:auto can center.
  // Left/default keeps plain inline-block so the resize handle stays glued to the image corner.
  if (align === "center") return "display:table;margin-left:auto;margin-right:auto";
  if (align === "right") return "display:table;margin-left:auto;margin-right:0";
  return "display:inline-block";
}

const ResizableImage = ImageExtension.extend({
  addAttributes() {
    return {
      ...this.parent?.(),
      width: {
        default: null,
        parseHTML: (element) => {
          const width = element.style.width || element.getAttribute("width");
          return width ? parseInt(width, 10) : null;
        },
        renderHTML: (attributes) => {
          if (!attributes.width) return {};
          return { style: `width: ${attributes.width}px` };
        },
      },
      align: {
        default: "left",
        parseHTML: (element) => element.getAttribute("data-align") || "left",
        renderHTML: (attributes) => ({
          "data-align": attributes.align,
          style: alignStyle(attributes.align),
        }),
      },
    };
  },

  addNodeView() {
    return ({ node, editor, getPos }) => {
      const wrapper = document.createElement("span");
      wrapper.className = "rte-img-wrap";

      const img = document.createElement("img");
      img.src = node.attrs.src;
      if (node.attrs.alt) img.alt = node.attrs.alt;
      img.style.width = node.attrs.width ? `${node.attrs.width}px` : "";
      wrapper.setAttribute("style", alignStyle(node.attrs.align));

      const handle = document.createElement("span");
      handle.className = "rte-resize-handle";
      handle.contentEditable = "false";

      const onMouseMove = (e: MouseEvent) => {
        const rect = img.getBoundingClientRect();
        const newWidth = Math.max(MIN_WIDTH, e.clientX - rect.left);
        img.style.width = `${newWidth}px`;
      };

      const commitWidth = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", commitWidth);
        document.body.style.userSelect = "";
        const finalWidth = Math.round(img.getBoundingClientRect().width);
        if (typeof getPos === "function") {
          const pos = getPos();
          if (typeof pos === "number") {
            const tr = editor.view.state.tr.setNodeMarkup(pos, undefined, {
              ...node.attrs,
              width: finalWidth,
            });
            editor.view.dispatch(tr);
          }
        }
      };

      handle.addEventListener("mousedown", (e) => {
        e.preventDefault();
        e.stopPropagation();
        document.body.style.userSelect = "none";
        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", commitWidth);
      });

      wrapper.appendChild(img);
      wrapper.appendChild(handle);

      return {
        dom: wrapper,
        update: (updatedNode) => {
          if (updatedNode.type.name !== "image") return false;
          img.src = updatedNode.attrs.src;
          img.style.width = updatedNode.attrs.width ? `${updatedNode.attrs.width}px` : "";
          wrapper.setAttribute("style", alignStyle(updatedNode.attrs.align));
          return true;
        },
      };
    };
  },
});

export default ResizableImage;
