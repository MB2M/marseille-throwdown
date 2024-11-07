import Image from "next/image";
import { RegisterButton } from "@/components/mt24/register-button";

export default function Header() {
  return (
    <div>
      <div className={"flex items-center justify-between py-4 px-5"}>
        <div>
          <Image
            src={"/img/logo-no-bg.png"}
            alt={"logo"}
            width={50}
            height={50}
            priority
            className={"w-12 h-auto"}
          />
        </div>
        <div className={"flex items-center gap-5"}>
          <RegisterButton />
          <div className={"lg:hidden"}>
            <Image
              src={"/img/icon-menu.png"}
              alt={"icon-menu"}
              width={24}
              height={24}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
