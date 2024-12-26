import { Button } from "@/components/ui/button";
import { CalculatorCard } from "@/components/calculator-card";
import { calcNumbers, calcOperators } from "@/lib/raw";
import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";

const App = () => {
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [output, setOutput] = useState(0);
  const [operator, setOperator] = useState("");

  const numberHandler = (value: number) => {
    if (operator.trim().length === 0) {
      return setFirstNum((prev) => parseInt(`${prev}${value}`));
    }
    setSecondNum((prev) => parseInt(`${prev}${value}`));
  };

  const operatorHandler = (operator: string) => {
    if (`${firstNum}`.length > 0) {
      setOperator(operator);
    }
  };

  const outcomeHandler = () => {
    if (operator && firstNum && secondNum) {
      switch (operator) {
        case "+":
          setOutput(firstNum + secondNum);
          break;
        case "-":
          setOutput(firstNum - secondNum);
          break;
        case "*":
          setOutput(firstNum * secondNum);
          break;
        case "/":
          setOutput(firstNum / secondNum);
          break;
        default:
          break;
      }
    }
  };

  const fieldClearHandler = () => {
    if (!operator) {
      if (`${firstNum}`.length === 1 || Number.isNaN(firstNum)) {
        setFirstNum(0);
        return;
      }
      return setFirstNum((prev) =>
        parseInt(`${prev}`.slice(0, `${prev}`.length - 1))
      );
    }
    if (operator) {
      if (`${secondNum}`.length === 1 || Number.isNaN(secondNum)) {
        setSecondNum(0);
        return;
      }
      return setSecondNum((prev) =>
        parseInt(`${prev}`.slice(0, `${prev}`.length - 1))
      );
    }
  };

  useEffect(() => {
    setFirstNum(output);
    setSecondNum(0);
    setOperator("");
  }, [output]);

  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center min-h-screen">
        <CalculatorCard>
          <div className="space-y-4">
            <div className="bg-accent text-accent-foreground p-2 text-3xl rounded-sm">
              {!operator && <p>{firstNum || 0}</p>}
              {operator && <p>{secondNum || 0}</p>}
            </div>
            <div className="grid grid-cols-3 gap-2">
              <>
                {calcNumbers.map((n) => (
                  <Button
                    key={n}
                    className="text-2xl h-12"
                    onClick={() => numberHandler(n)}
                  >
                    {n}
                  </Button>
                ))}
                {calcOperators.map((o) => (
                  <Button
                    key={o}
                    className={cn(
                      "text-2xl h-12",
                      operator === o && "bg-secondary"
                    )}
                    disabled={`${firstNum}`.length < 1}
                    onClick={() => operatorHandler(o)}
                  >
                    {o}
                  </Button>
                ))}
                <Button
                  className={cn("text-2xl h-12")}
                  disabled={!firstNum && !operator}
                  onClick={outcomeHandler}
                >
                  =
                </Button>
              </>
            </div>
          </div>
          <Button
            size="icon"
            className="absolute top-[118px] right-8"
            onClick={fieldClearHandler}
          >
            DEL
          </Button>
        </CalculatorCard>
      </div>
    </div>
  );
};
export default App;
