import { defineComponent, h, type PropType } from "vue";

// Utility function to remove width and height attributes from SVG content
function removeSVGAttributes(svgContent: string): string {
	return svgContent.replace(/width="\d+"|height="\d+"/g, "");
}

// Utility function to create a Vue component from SVG content
export default function createSVGComponent(svgContent: string) {
	return defineComponent({
		name: "SVGComponent",
		props: {
			size: {
				type: [String, Number] as PropType<string | number>,
				default: 36,
			},
			width: {
				type: [String, Number] as PropType<string | number>,
				default: null,
			},
			height: {
				type: [String, Number] as PropType<string | number>,
				default: null,
			},
			svgContent: {
				type: String as PropType<string>,
				default: svgContent,
			},
		},
		computed: {
			svgStyle() {
				return {
					width: this.width ? `${this.width}px` : `${this.size}px`,
					height: this.height ? `${this.height}px` : `${this.size}px`,
				};
			},
			sanitizedSvgContent() {
				// Remove width and height attributes from the SVG content
				return removeSVGAttributes(this.svgContent);
			},
		},
		render() {
			return h("div", { style: this.svgStyle, innerHTML: this.sanitizedSvgContent });
		},
	});
}
