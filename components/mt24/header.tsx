import Image from "next/image";
import { RegisterButton } from "@/components/mt24/register-button";
import { LogoMT } from "@/components/mt24/logo-MT";

export default function Header() {
  return (
    <div>
      <div className={"flex items-center justify-between py-4 px-5"}>
        <LogoMT />
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
