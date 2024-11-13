import { Title } from "@/components/mt24/title";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const ContactPage = () => {
  return (
    <div className={"flex flex-col py-14 px-5 gap-20 text-center"}>
      <div className={"flex flex-col gap-6 max-w-[550px] mx-auto"}>
        <Title className={"text-center"}>
          <Title.subTitle>ANY QUESTION ?</Title.subTitle>
          <Title.mainTitle>CONTACT US</Title.mainTitle>
        </Title>
        <div>
          <div>Do you have a question or need help?</div>
          <div>
            Do not hesitate to contact us, our team is here to answer you
            quickly!
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-10"}>
        <div className={"flex flex-col gap-3.5 font-bold text-center"}>
          For any issue with the competition (registration, payment,
          workouts,...) please open a ticket:
          <div className={"w-full lg:w-auto"}>
            <Link
              href={"https://marseille-throwdown.on.spiceworks.com/portal"}
              target={"_blank"}
            >
              <Button
                variant={"ghost"}
                className={"bg-foreground text-background"}
              >
                Open a ticket
              </Button>
            </Link>
          </div>
        </div>
        <div className={"flex flex-col gap-3.5 font-bold text-center"}>
          For any open question, fill free to contact us at this email address
          <Link href={"mailto:marseille.throwdown@gmail.com"}>
            <Button variant={"gradient"}>
              <div>
                <Image
                  src={"/img/mail.png"}
                  alt={"mail"}
                  width={18}
                  height={18}
                />
              </div>
              marseille.throwdown@gmail.com
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
