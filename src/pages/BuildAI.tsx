import { Button } from "@heroui/react";
import { Link } from "react-router-dom";

export default function BuildAI() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] text-center px-4">
      <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
        Build Your AI Workforce
      </h1>
      <p className="text-gray-400 mb-8 max-w-md">
        Deploy custom agents on your existing infrastructure.
      </p>
      <Button as={Link} to="/" color="primary" variant="flat">
        Go Back
      </Button>
    </div>
  );
}