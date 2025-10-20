import Image from "next/image";
import styles from "./page.module.css";
import { stripe } from "@/lib/stripe";
import Link from "next/link";
import { Carousel } from "@/components/carousel";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  return (
    <div>
      <section className="rounded bg-neutral-100 py-8 sm:py-12">
        <div className="mx-auto flex  items-center justify-around px-8 sm:px-16">
          <div className="max-w-md space-y-4">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Welcome to my Ecommerce
            </h2>
            <p className="text-neutral-600">
              Discover best shoes at the best price
            </p>
            <Button
              asChild
              variant="default"
              className="inline-flex item-center justify-center rounded-full px-6 py-3 bg-black text-white"
            >
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full px-6 py-3"
              >
                See Products
              </Link>
            </Button>
          </div>
          <Image
            alt="Hero Image"
            width="300"
            height="300"
            className="rounded"
            src={products.data[0].images[0]}
          />
        </div>
      </section>
      <section className="py-8">
        <Carousel />
      </section>
    </div>
  );
}
