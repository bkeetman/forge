import { createDesignSystemPage } from "@site-foundry/next";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";

export default createDesignSystemPage({
  title: "My Project UI",
  components: {
    Button,
    Input,
    Card,
  },
  sections: ["colors", "typography", "buttons", "forms", "cards", "states"],
  options: {
    darkModeToggle: true,
    responsivePreview: true,
  },
});
