import { Routes } from "@angular/router";
import { App } from "./app";
import { Ui } from "./ui/ui";

export const routes: Routes = [
  { path: "", component: App },
  { path: "ui", component: Ui },
];
