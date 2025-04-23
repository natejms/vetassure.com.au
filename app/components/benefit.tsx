import Image from "next/image";

export default function Benefits() {
  return (
    <div className="space-y-6 mx-auto flex flex-col max-w-[1600px] py-20">
      <div>
        <p className="text-h2 text-center font-medium">Why VETAssure?</p>
        <p className="text-center text-body-large text-light">
          We are changing the way registered training organisations manage
          compliance
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-6 lg:grid-rows-2">
        <div className="relative lg:col-span-3">
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
            <Image
              alt=""
              src="/cpi2.png"
              width={"600"}
              height={"200"}
              className="h-80 object-cover object-left"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-accent">
                Reports and Analytics
              </h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                Data driven decision making
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Turn compliance data into actionable insights. Spot trends,
                uncover regressions, and proactively resolve issues before your
                next audit.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-t-[2rem] lg:rounded-tl-[2rem]" />
        </div>
        <div className="relative lg:col-span-3">
          <div className="absolute inset-px rounded-lg bg-white lg:rounded-tr-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
            <Image
              alt=""
              src="/schedule.png"
              width={"600"}
              height={"200"}
              className="h-80 object-cover object-left lg:object-right"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-accent">
                Scheduling
              </h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                Organise and manage your teams
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Easily coordinate your compliance team’s workflow by scheduling
                audits, meetings, and events—keeping everyone aligned and on
                track.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-tr-[2rem]" />
        </div>
        <div className="relative lg:col-span-2">
          <div className="absolute inset-px rounded-lg bg-white lg:rounded-bl-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] lg:rounded-bl-[calc(2rem+1px)]">
            <Image
              alt=""
              src="/matrix3.png"
              width={"600"}
              height={"200"}
              className="h-80 object-cover object-left"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-accent">
                Trainer Scope
              </h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                Built for compliance and clarity
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Easily manage trainer scopes across qualifications and units.
                Ensure your team remains aligned with regulatory requirements
                and audit-ready at all times.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 lg:rounded-bl-[2rem]" />
        </div>
        <div className="relative lg:col-span-2">
          <div className="absolute inset-px rounded-lg bg-white" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)]">
            <Image
              alt=""
              width={"600"}
              height={"200"}
              src="/matrix3.png"
              className="h-80 object-cover"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-accent">
                Integrations
              </h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                Connect your favorite tools
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Seamlessly integrate with student management systems, Google
                Calendar, and Microsoft Outlook to keep your workflows connected
                and your team in sync.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5" />
        </div>
        <div className="relative lg:col-span-2">
          <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
          <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(theme(borderRadius.lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-br-[calc(2rem+1px)]">
            <Image
              alt=""
              width={"600"}
              height={"200"}
              src="/matrix3.png"
              className="h-80 object-cover"
            />
            <div className="p-10 pt-4">
              <h3 className="text-sm/4 font-semibold text-accent">
                Collaboration
              </h3>
              <p className="mt-2 text-lg font-medium tracking-tight text-gray-950">
                Work better, together
              </p>
              <p className="mt-2 max-w-lg text-sm/6 text-gray-600">
                Empower your compliance and training teams to collaborate in
                real-time across locations. Share insights, assign tasks, and
                track progress—all in one place.
              </p>
            </div>
          </div>
          <div className="pointer-events-none absolute inset-px rounded-lg shadow ring-1 ring-black/5 max-lg:rounded-b-[2rem] lg:rounded-br-[2rem]" />
        </div>
      </div>
    </div>
  );
}
