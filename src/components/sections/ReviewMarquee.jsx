import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { companyName } from "@/libs/data";
const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "The technician arrived on time and fixed my washing machine in no time. Excellent service!",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I couldn't believe how quickly they repaired my refrigerator. Highly recommended!",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "Fantastic service! My dishwasher works like new again. Thank you so much!",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Jane",
    username: "@jane",
    body: "The team was professional and friendly. They fixed my oven in under an hour. Amazing work!",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "I’m so happy with the service! My dryer is working perfectly now. Great job!",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "James",
    username: "@james",
    body: "Very reliable and efficient. They repaired my air conditioner on the same day I called.",
    img: "https://avatar.vercel.sh/james",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);
const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 bg-secondary text-black"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};
const ReviewMarquee = ({ company = companyName }) => {
  return (
    <div
      className={cn(
        "relative flex h-full w-full flex-col items-center justify-center overflow-hidden border text-white py-20 md:shadow-xl",
        company === "Lg"
          ? "bg-lgPrimary"
          : company === "Samsung"
          ? ""
          : company === "Siemens"
          ? "bg-siemensPrimary"
          : company === "Bosch"
          ? "bg-boschSecondary"
          : "bg-tertiary"
      )}
    >
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
    </div>
  );
};
export default ReviewMarquee;
