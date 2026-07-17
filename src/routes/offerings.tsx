import { createFileRoute } from "@tanstack/react-router";
import { MembershipPage } from "./membership";
import { PackagesPage } from "./packages";
import { GiftCardPage } from "./gift-card";

export const Route = createFileRoute("/offerings")({
  head: () => ({
    meta: [
      { title: "Membership, Packages & Gift Cards — MUSE By Missi Aesthetics" },
      {
        name: "description",
        content:
          "Explore Muse By Missi Aesthetics memberships, curated treatment packages, and gift cards — all in one place.",
      },
      { property: "og:title", content: "Membership, Packages & Gift Cards — MUSE By Missi" },
      {
        property: "og:description",
        content: "Memberships, packages, and gift cards from Muse By Missi Aesthetics.",
      },
    ],
  }),
  component: OfferingsPage,
});

function OfferingsPage() {
  return (
    <>
      <div id="membership">
        <MembershipPage />
      </div>
      <div id="packages" className="border-t border-gold/10">
        <PackagesPage />
      </div>
      <div id="gift-card" className="border-t border-gold/10">
        <GiftCardPage />
      </div>
    </>
  );
}