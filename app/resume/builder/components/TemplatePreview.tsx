import TemplateA from "./TemplateA";
import TemplateB from "./TemplateB";

export default function TemplatePreview({ data, selectedTemplate }) {
  if (selectedTemplate === "A") return <TemplateA data={data} />;
  if (selectedTemplate === "B") return <TemplateB data={data} />;
  return <TemplateA data={data} />;
}
