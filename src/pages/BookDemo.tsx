import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

export default function BookDemo() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4">Book a Demo</h1>
      <p className="text-gray-400 mb-8 max-w-md">
        Ready to see the agents in action? Schedule a time with our engineering
        team.
      </p>
      <Button
        as={Link}
        className="text-white border-white/20"
        to="/"
        variant="bordered"
      >
        Return Home
      </Button>
    </div>
  );
}
