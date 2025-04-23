import {
  Container,
  Heading,
  Hr,
  Img,
  Preview,
  Tailwind,
  Text,
} from "@react-email/components";
import EmailFooter from "./email-footer";

interface MailingListSignUpProps {
  firstName: string;
}

export const MailingListSignUp = ({ firstName }: MailingListSignUpProps) => (
  <Tailwind>
    <Preview>Welcome to VETAssure - What is VETAssure?</Preview>
    <Container>
      <Img src={`/icon.svg`} width="75" height="75" alt="VETAssure" />
      <Heading className="text-2xl font-medium">
        Hey {firstName}, welcome to VETAssure
      </Heading>
      <Text>
        Thank you for joining the waitlist! We can't wait to show you what we
        have been working on. We will reach out in May to get started!
      </Text>
      <Heading className="text-xl font-medium">A little back story</Heading>
      <Heading className="text-sm font-medium">
        🌱 2018 - The seed was planted
      </Heading>
      <Text>
        Frustrated by how complex and inconsistent compliance processes were
        across the VET sector, we started asking ourselves: “Why does it have to
        be this hard?”
      </Text>
      <Heading className="text-sm font-medium">
        📝 2019 - Planning began
      </Heading>
      <Text>
        We began mapping out a smarter, more supportive solution to help RTOs
        feel more confident in their operations, not fearful of audits.
      </Text>
      <Heading className="text-sm font-medium">
        🙌 2021 - 2024 - We built. We tested. We built again.
      </Heading>
      <Text>
        Over three years, we poured everything into building VETAssure — a tool
        that reflects over 40 years of combined experience in VET compliance.
        The first couple of years we built and tested various interations of the
        product but knew there were still some gaps. Today we are confident in
        the product we are introducing to give RTOs the best compliance
        mangement suite on the market.
      </Text>
      <Heading className="text-xl font-medium">
        Why we are here and where to now
      </Heading>
      <Text>
        Too often, compliance feels like a burden — something to be feared or
        managed reactively.
      </Text>
      <Text>
        But it shouldn't be that way. We created VETAssure to make compliance
        easier, clearer, and more accessible — transforming it from a stressor
        into a strength.
      </Text>
      <Heading className="text-sm font-medium">🎯 Our goal is simple:</Heading>
      <Text>✅ Streamline and automate compliance processes</Text>
      <Text>
        ✅ Give teams confidence in their systems, workforce and evidence
      </Text>
      <Text>
        ✅ Empower productivity in organisations to give more time to compliance
      </Text>
      <Hr />
      <EmailFooter />
    </Container>
  </Tailwind>
);

MailingListSignUp.PreviewProps = {
  firstName: "Nathan",
} as MailingListSignUpProps;
