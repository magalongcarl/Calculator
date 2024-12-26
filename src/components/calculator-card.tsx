import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "./ui/button";

import { Twitter, Github } from "lucide-react";

export const CalculatorCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <Card className="w-[500px] relative">
      <CardHeader>
        <CardTitle>Let me calc 🧮</CardTitle>
        <CardDescription>
          Your simple and reliable calculator for everyday math. Fast, easy, and
          always ready to help you crunch the numbers!
        </CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      <CardFooter>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm">
            <small className="text-primary">
              <a href="https://github.com/magalongcarl">
                <Github width={20} />
              </a>
            </small>
            magalongcarl
          </Button>
          <Button variant="outline" size="sm">
            <small className="text-primary underline">
              <a href="https://x.com/carlmag_">
                <Twitter width={20} />
              </a>
            </small>
            carlmag_
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
