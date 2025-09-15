export const wrapText = (
	mode: "word" | "line",
	element: "span" | "div",
	textString: string
): string => {
	if(mode === "line") return textString // Not needed for now but would add this for different types of text animations

	const textArray = textString?.split(' ') || [];

	const html = `<${element}>${textArray.join(`</${element}><${element}>`)}</${element}>`;

	return html;
};