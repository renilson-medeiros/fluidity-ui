"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion/accordion";

export function FAQSection() {
  const faqs = [
    {
      question: "Is it accessible?",
      answer: "Yes. It adheres to the WAI-ARIA design pattern.",
    },
    {
      question: "Is it styled?",
      answer: "Yes. It comes with default styles that matches the other components' aesthetic.",
    },
    {
      question: "Is it animated?",
      answer: "Yes. It's animated by default, but you can disable it if you prefer.",
    },
    {
        question: "Can I customize the colors?",
        answer: "Absolutely. The entire system is built on CSS variables which can be easily overridden globally or locally.",
    },
  ];

  return (
    <div className="w-full mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
