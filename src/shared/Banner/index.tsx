import {
  Card,
  CardContent,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


import Image from "next/image";

import banner from "@/assets/Image.svg";

import styles from "./styles.module.css";
import { Button } from "@/components/ui/button";
import { Bike, ShoppingBag } from "lucide-react";



export function Banner() {
  return (
    <div className={styles["banner-container"]}>
      <div className={styles["banner-content"]}>
        <div className={styles["content-container"]}>
          <h2 className={styles["title"]}>Are you starving?</h2>
          <p className={styles["subtitle"]}>Within a few clicks, find meals that are accessible near you</p>

          <Card className={styles["card-container"]}>
            <CardHeader>
              <CardTitle className={styles["card-title"]}>
                <Button className={styles["checked-button"]}><Bike /> Delivery</Button>
                <Button className={styles["not-checked-button"]}><ShoppingBag /> Retirada</Button>
              </CardTitle>              
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>            
          </Card>
        </div>

        <div className={styles["image-container"]}>
          <Image src={banner} alt="" />
        </div>
      </div>      
    </div>
  );
}