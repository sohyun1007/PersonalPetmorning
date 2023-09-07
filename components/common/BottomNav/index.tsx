import Link from "next/link";
import React from "react";

import * as S from "./style";
import { URL_PATTERNS } from "constants/url-patterns";
import { Home, MenuSquare, Store, User, User2 } from "lucide-react";
import { useRouter } from "next/router";
import { lightTheme } from "styles/PMDS";

const BottomNav: React.FC = () => {
  const pathname = useRouter().pathname;
  const navList = [
    {
      icon: ({ color }: { color: string }) => <Store color={color} />,
      route: URL_PATTERNS.STORE,
    },
    {
      icon: ({ color }: { color: string }) => <Home color={color} />,
      route: URL_PATTERNS.HOME,
    },
    {
      icon: ({ color }: { color: string }) => <User2 color={color} />,
      route: URL_PATTERNS.MYPAGE,
    },
  ];

  const isActive = (route: string) => {
    return pathname === route;
  };
  if (pathname === "/signin") return null;
  // if (pathname === "/auth/signin") return null;
  else
    return (
      <>
        <S.Container>
          <nav>
            {navList.map(({ icon, route }) => {
              const color = isActive(route)
                ? (lightTheme.colors.main as string)
                : (lightTheme.colors.disabled as string);
              return (
                <Link
                  key={route}
                  passHref
                  href={route}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <S.NavItemAnchor $isActive={isActive(route)}>
                    {icon({ color })}
                  </S.NavItemAnchor>
                  <S.Dot $isActive={isActive(route)} />
                </Link>
              );
            })}
          </nav>
        </S.Container>
        <S.ContainerWhiteSpace aria-hidden />
      </>
    );
};

export default React.memo(BottomNav);
