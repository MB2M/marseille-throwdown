import { LogoMT } from "@/components/mt24/logo-MT";
import Link from "next/link";
import { ShopButton } from "@/components/mt24/shop-button";

export default function Header() {
  return (
    <div>
      <div className={"flex items-center justify-between py-4 px-5"}>
        <Link href={"/"}>
          <LogoMT />
        </Link>
        <div className={"flex items-center gap-5"}>
          {/*<RegisterButton />*/}
          <ShopButton />
          {/*<div className={"lg:hidden"}>*/}
          {/*  <Image*/}
          {/*    src={"/img/icon-menu.png"}*/}
          {/*    alt={"icon-menu"}*/}
          {/*    width={24}*/}
          {/*    height={24}*/}
          {/*    priority*/}
          {/*  />*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
}
