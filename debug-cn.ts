
import { cn } from "./src/lib/utils";

const test1 = cn("border border-border", "border-red-500");
console.log(`Test 1 (Override border-border with border-red-500): "${test1}"`);

const test2 = cn("bg-primary text-primary-foreground", "bg-red-500");
console.log(`Test 2 (Override bg-primary with bg-red-500): "${test2}"`);

const test3 = cn("text-sm font-medium", "text-lg");
console.log(`Test 3 (Override text-sm with text-lg): "${test3}"`);
