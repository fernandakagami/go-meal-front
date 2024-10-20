import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import styles from "./styles.module.css";
import { Input } from "@/components/ui/input";

export function TakeContent() {
  return (
    <div className={styles["delivery-container"]}> 
      <div className={styles["input-container"]}>
        <MapPin color="var(--orange-500)" size={18} /> 
        <Input className={styles["delivery-input"]} placeholder="Preencha seu endereço"/>
      </div>       

        <Button className={styles["delivery-button"]}>Encontre um restaurante</Button>
      </div>
  );
}