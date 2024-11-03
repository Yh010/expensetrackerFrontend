import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User, Bot, ArrowUp } from "lucide-react";

export default function LoginFirstComponent() {
  return (
    <div className="flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-white shadow-xl border border-green-500 rounded-lg">
        <div className="p-6 space-y-4">
          <div className="flex items-start space-x-2">
            <User className="w-8 h-8 p-1 rounded-full bg-gray-200 text-gray-600" />
            <div className="bg-gray-100 rounded-lg p-2 max-w-[80%]">
              <p className="text-sm">Hello, I need help with my account.</p>
            </div>
          </div>

          <div className="flex items-start space-x-2 justify-end">
            <div className="text-black border border-green-500 rounded-lg p-2 max-w-[80%]">
              <p className="text-sm">
                I'd be happy to help! However, it looks like you're not logged
                in yet.{" "}
                <div className="underline">
                  Please log in first so I can assist you better.
                </div>
              </p>
            </div>
            <Bot className="w-8 h-8 p-1 rounded-full bg-primary/20 text-primary" />
          </div>

          <div className="flex items-start space-x-2">
            <User className="w-8 h-8 p-1 rounded-full bg-gray-200 text-gray-600" />
            <div className="bg-gray-100 rounded-lg p-2 max-w-[80%]">
              <p className="text-sm">Oh, I see. How do I log in?</p>
            </div>
          </div>

          <div className="flex items-start space-x-2 justify-end">
            <div className="text-black border border-green-500 rounded-lg p-2 max-w-[80%]">
              <p className="text-sm">
                You can log in by clicking the "Login" button at the top right
                of this screen. Once you're logged in, you'll be able to use
                this app!
              </p>
            </div>
            <Bot className="w-8 h-8 p-1 rounded-full bg-primary/20 text-primary" />
          </div>
        </div>

        <div className="p-4 border-t">
          <div className="flex space-x-2">
            <Input
              className="flex-grow"
              placeholder="Message (login required)"
              disabled
            />
            <Button size="icon" disabled>
              <ArrowUp className="h-4 w-4" />
              <span className="sr-only">Send</span>
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
