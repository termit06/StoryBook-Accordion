import { Accordion, AccordionTab} from 'primereact/accordion';
export interface AccordionTabItem {
  children: React.ReactNode;
  header: string
}
export interface AccordionProps {
  tabs: AccordionTabItem[];
  multiple?: boolean;
  disabled: boolean;
}
const AccordionReact = ({tabs, multiple = true, disabled = false}: AccordionProps) => {
    return (
      <Accordion multiple={multiple} >
        {tabs.map((tab, index) => (
          <AccordionTab key={index} header={tab.header} disabled={disabled}>
            {tab.children}
           </AccordionTab>
        ))}
      </Accordion>
    );
}
export default AccordionReact