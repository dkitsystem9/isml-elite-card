import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';
import './AccordionFAQ.css';

const faqs = [
  {
    q: 'What is the ISML Elite Membership?',
    a: 'A digital membership that offers exclusive discounts, academic perks, and early access to premium courses.'
  },
  {
    q: 'How do I get my Elite Card?',
    a: 'Once payment is completed, your digital card will be sent via email within 2 working days.'
  },
  {
    q: 'Can I upgrade later?',
    a: 'Yes, within 30 days of purchase by paying the difference plus ₹10.'
  },
  {
    q: 'Is the card physical?',
    a: 'No. It’s digital-only, sent as a PDF/image via email.'
  },
  {
    q: 'Is the card refundable?',
    a: 'Refunds are only allowed in case of technical issues or duplicate payment.'
  }
];

export default function AccordionFAQ() {
  return (
    <Accordion.Root type="single" collapsible className="accordion">
      {faqs.map((faq, i) => (
        <Accordion.Item value={`faq-${i}`} key={i} className="accordion-item">
          <Accordion.Header>
            <Accordion.Trigger className="accordion-trigger">
              {faq.q}
              <ChevronDown size={20} />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordion-content">
            {faq.a}
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
}
