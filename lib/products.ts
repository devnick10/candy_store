export interface IProduct{
  id:number;
  name:string;
  category:string;
  price:string;
  emoji:string;
  description:string;
  colorClass:string;
  bgColor:string;
  textColor:string;
  badgeColor:string;
  slug:string;
}

export const products:IProduct[] = [
    {
      id: 1,
      name: "Lemon Drops",
      category: "citrus",
      price: "$4.99",
      emoji: "🍋",
      description: "Tangy lemon candies that burst with refreshing citrus flavor. Made with real lemon extract.",
      colorClass: "from-yellow-100 to-amber-200",
      bgColor: "bg-yellow-300",
      textColor: "text-amber-700",
      badgeColor: "bg-amber-100 text-amber-700",
      slug: "lemon-drops"
    },
    {
      id: 2,
      name: "Strawberry Delights",
      category: "berry",
      price: "$4.99",
      emoji: "🍓",
      description: "Sweet strawberry candies with a juicy center. Each piece captures the essence of fresh berries.",
      colorClass: "from-red-100 to-pink-200",
      bgColor: "bg-red-300",
      textColor: "text-pink-700",
      badgeColor: "bg-pink-100 text-pink-700",
      slug: "strawberry-delights"
    },
    {
      id: 3,
      name: "Mango Tango",
      category: "tropical",
      price: "$5.49",
      emoji: "🥭",
      description: "Tropical mango-flavored candies that transport you to paradise with each bite.",
      colorClass: "from-green-100 to-yellow-200",
      bgColor: "bg-green-300",
      textColor: "text-green-700",
      badgeColor: "bg-green-100 text-green-700",
      slug: "mango-tango"
    },
    {
      id: 4,
      name: "Fruit Medley",
      category: "assorted",
      price: "$6.99",
      emoji: "🍬",
      description: "An assortment of our most popular fruit flavors. Perfect for those who love variety.",
      colorClass: "from-purple-100 to-pink-200",
      bgColor: "bg-purple-300",
      textColor: "text-purple-700",
      badgeColor: "bg-purple-100 text-purple-700",
      slug: "fruit-medley"
    },
    {
      id: 5,
      name: "Orange Zest",
      category: "citrus",
      price: "$4.99",
      emoji: "🍊",
      description: "Bright orange candies with a refreshing citrus zing. Made with real orange oil.",
      colorClass: "from-orange-100 to-amber-200",
      bgColor: "bg-orange-300",
      textColor: "text-orange-700",
      badgeColor: "bg-orange-100 text-orange-700",
      slug: "orange-zest"
    },
    {
      id: 6,
      name: "Blueberry Burst",
      category: "berry",
      price: "$5.49",
      emoji: "🫐",
      description: "Sweet blueberry candies with a juicy center that bursts with authentic berry flavor.",
      colorClass: "from-blue-100 to-purple-200",
      bgColor: "bg-blue-300",
      textColor: "text-blue-700",
      badgeColor: "bg-blue-100 text-blue-700",
      slug: "blueberry-burst"
    },
    {
      id: 7,
      name: "Watermelon Wonder",
      category: "tropical",
      price: "$4.99",
      emoji: "🍉",
      description: "Refreshing watermelon candies that capture summer's sweetness in every piece.",
      colorClass: "from-pink-100 to-red-200",
      bgColor: "bg-pink-300",
      textColor: "text-pink-700",
      badgeColor: "bg-pink-100 text-pink-700",
      slug: "watermelon-wonder"
    },
    {
      id: 8,
      name: "Berry Bonanza",
      category: "assorted",
      price: "$6.49",
      emoji: "🍭",
      description: "A mix of our premium berry flavors including strawberry, blueberry, and raspberry.",
      colorClass: "from-amber-100 to-red-200",
      bgColor: "bg-amber-300",
      textColor: "text-amber-700",
      badgeColor: "bg-amber-100 text-amber-700",
      slug: "berry-bonanza"
    }
  ];