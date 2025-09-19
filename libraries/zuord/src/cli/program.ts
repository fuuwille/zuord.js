#!/usr/bin/env node
import { Command } from "commander";
import build from "./build";

const program = new Command();

program
.name("zuord")
.description("Zuord CLI")
.version("1.0.0");

program
.command("build")
.description("Build the zuord package")
.option("--library", "Build as library")
.action(build);

program.parse(process.argv);