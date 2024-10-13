"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";

import logo from "@/assets/logo.svg";

import styles from "./styles.module.css";
import { User } from "lucide-react";

import { useEffect, useState } from "react";

export function NavBar() {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      const response = await fetch("/api/geo");
      console.log(response);
      const data = await response.json();
      setLocation(data.city);
    };

    fetchLocation();
  }, []);

  console.log(location);
  return (
    <div className={styles["navbar-container"]}>
      <div className={styles["logo-container"]}>
        <Image src={logo} alt="logo" />
        <h1>GoMeal<b className={styles["logo-detail"]}>.</b></h1>
      </div>

      <div>
        <h3>Localidade: </h3>
      </div>

      <div>
        <Button variant="ghost" className={styles["login-button"]}><User color="var(--orange-500)" fill="var(--orange-500)"/> Login</Button>
      </div>
    </div>
  );
}