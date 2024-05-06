import React from "react";
import MarqueeData from "@/utils/marqueeData";
import { Token } from "@/utils/marquee.dto";
import styles from "./Marquee.module.css";
import { IconCurrencyEthereum, IconReceipt2 } from "@tabler/icons-react";

interface ChipProps {
  item: Token;
}

function Marquee() {
  console.log(MarqueeData());

  let data = MarqueeData();

  return (
    <>
      <div className={styles.marquee_wrapper}>
        {data?.map((item) => {
          return <Chip key={item.tokenSymbol} item={item} />;
        })}
        {data?.map((item) => {
          return <Chip key={item.tokenSymbol} item={item} />;
        })}
      </div>
    </>
  );
}

export default Marquee;

function Chip({ item }: ChipProps) {
  return (
    <div className={styles.marquee_slide}>
      <div className="text-black flex  justify-center gap-4 ">
        <span>
          {/* <IconCurrencyEthereum stroke={2} /> */}
          Token
        </span>
        <p>{item.tokenSymbol}</p>
      </div>
      <div className="text-black flex  justify-center gap-4 mt-4 ">
        <span>
          {/* <IconReceipt2 stroke={2} /> */}
          Price
        </span>
        <p>: {item?.maxPrice.toString().slice(0, 8)}</p>
      </div>
    </div>
  );
}
