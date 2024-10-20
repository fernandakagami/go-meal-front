"use client";

import { useState } from "react";

import {
  Card,
  CardContent,  
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";

import banner from "@/assets/banner.svg";

import styles from "./styles.module.css";
import { Button } from "@/components/ui/button";
import { Bike, ShoppingBag } from "lucide-react";
import { DeliveryContent } from "./DeliveryContent";
import { TakeContent } from "./TakeContent";

export function Banner() {
  const [delivery, setDelivery] = useState(true);
  
  return (
    <div className={styles["banner-container"]}>
      <div className={styles["banner-content"]}>
        <div className={styles["content-container"]}>
          <h2 className={styles["title"]}>Are you starving?</h2>
          <p className={styles["subtitle"]}>Within a few clicks, find meals that are accessible near you</p>

          <Card className={styles["card-container"]}>
            <CardHeader>
              <CardTitle className={styles["card-title"]}>
                <Button className={delivery ? styles["checked-button"] : styles["not-checked-button"]} onClick={() => setDelivery(true)}><Bike /> Delivery</Button>
                <Button className={delivery ? styles["not-checked-button"] : styles["checked-button"]} onClick={() => setDelivery(false)}><ShoppingBag /> Retirada</Button>
              </CardTitle>              
            </CardHeader>
            <CardContent>
              {delivery ? <DeliveryContent /> : <TakeContent /> }
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