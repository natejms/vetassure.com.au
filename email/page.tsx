import { MailingListSignUp } from "../app/components/emails/mailing-list-sign-up";

export default function Email() {
  return (
    <div className="h-screen w-full mx-auto py-24 max-w-5xl">
      <MailingListSignUp firstName="Nathan" />
    </div>
  );
}
