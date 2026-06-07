import { Accordion, AccordionTab} from 'primereact/accordion';
export interface AccordionTabItem {
  children: React.ReactNode;
  disabled?: boolean;
  header: string
}
export interface AccordionProps {
  tabs: AccordionTabItem[];
  multiple?: boolean;
 
}
const AccordionReact = ({tabs, multiple = false}: AccordionProps) => {
    return (
      <Accordion multiple={multiple}>
        {tabs.map((tab, index) => (
          <AccordionTab key={index} header={tab.header} disabled={tab.disabled}>
            {tab.children}
          </AccordionTab>
        ))}
      </Accordion>
    );
}
export default AccordionReact