import {
  Section,
  Text,
  Row,
  Column,
  Link,
  Tailwind,
} from "@react-email/components";
import { FaLinkedinIn } from "react-icons/fa";
import { FiYoutube } from "react-icons/fi";

export default function EmailFooter() {
  return (
    <Tailwind>
      <Section className="mt-6">
        <Text className="mb-0 mt-[4px] text-[16px] leading-[24px] text-gray-500">
          Goodbye spreadsheets, hello compliance.
        </Text>
        <Row className="table-cell h-[44px] w-[56px] align-bottom">
          <Column className="pr-[8px]">
            <Link href="https://www.linkedin.com/company/vetassureau">
              <FaLinkedinIn color="gray" />
            </Link>
          </Column>
          <Column className="pr-[8px]">
            <Link>
              <FiYoutube color="gray" />
            </Link>
          </Column>
        </Row>
        <Link href="mailto:nathan@vetassure.com.au">nathan@vetassure.com</Link>
      </Section>
    </Tailwind>
  );
}
