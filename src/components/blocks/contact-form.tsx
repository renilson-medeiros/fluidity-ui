"use client";

import { Button } from "@/components/ui/button/button";
import { Input, Textarea } from "@/components/ui/input/input";
import { Label } from "@/components/ui/label/label";
import { Card } from "@/components/ui/card/card";

export function ContactForm() {
  return (
    <Card className="p-8 border-border max-w-lg mx-auto bg-background">
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight">Get in touch</h3>
        <p className="text-sm text-muted-foreground mt-2">We'd love to hear from you.</p>
      </div>
      
      <form className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
                <Label htmlFor="first-name">First name</Label>
                <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
                <Label htmlFor="last-name">Last name</Label>
                <Input id="last-name" placeholder="Doe" />
            </div>
        </div>

        <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="john@example.com" />
        </div>

        <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="How can we help you?" className="min-h-[120px]" />
        </div>

        <Button className="w-full" size="lg">Send Message</Button>
      </form>
    </Card>
  );
}
