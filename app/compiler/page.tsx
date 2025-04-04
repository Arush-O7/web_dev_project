"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Download, Copy, Save } from "lucide-react"

const languages = [
  { id: "cpp", name: "C++" },
  { id: "java", name: "Java" },
  { id: "python", name: "Python" },
  { id: "javascript", name: "JavaScript" },
]

const defaultCode = {
  cpp: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}`,
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`,
  python: `print("Hello, World!")`,
  javascript: `console.log("Hello, World!");`,
}

export default function CompilerPage() {
  const [language, setLanguage] = useState("cpp")
  const [code, setCode] = useState(defaultCode.cpp)
  const [input, setInput] = useState("")
  const [output, setOutput] = useState("")
  const [isRunning, setIsRunning] = useState(false)

  const handleLanguageChange = (value: string) => {
    setLanguage(value)
    setCode(defaultCode[value as keyof typeof defaultCode])
  }

  const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCode(e.target.value)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInput(e.target.value)
  }

  const runCode = () => {
    setIsRunning(true)
    // In a real app, this would send the code to a backend for execution
    setTimeout(() => {
      setOutput(`Program executed successfully!\n\nOutput:\nHello, World!`)
      setIsRunning(false)
    }, 1500)
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
  }

  const downloadCode = () => {
    const extensions: Record<string, string> = {
      cpp: "cpp",
      java: "java",
      python: "py",
      javascript: "js",
    }

    const blob = new Blob([code], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `code.${extensions[language]}`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Online Compiler</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <Select value={language} onValueChange={handleLanguageChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.id} value={lang.id}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="flex space-x-2">
              <Button variant="outline" size="icon" onClick={copyCode}>
                <Copy className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" onClick={downloadCode}>
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Save className="h-4 w-4" />
              </Button>
              <Button onClick={runCode} disabled={isRunning}>
                {isRunning ? "Running..." : "Run"}
                <Play className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>

          <Card className="min-h-[500px]">
            <CardContent className="p-0">
              <textarea
                className="w-full h-[500px] p-4 font-mono text-sm bg-background resize-none focus:outline-none"
                value={code}
                onChange={handleCodeChange}
                spellCheck="false"
              />
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Tabs defaultValue="input">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="input">Input</TabsTrigger>
              <TabsTrigger value="output">Output</TabsTrigger>
            </TabsList>
            <TabsContent value="input">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Input</CardTitle>
                  <CardDescription>Provide input for your program</CardDescription>
                </CardHeader>
                <CardContent>
                  <textarea
                    className="w-full h-[350px] p-2 font-mono text-sm border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-primary"
                    value={input}
                    onChange={handleInputChange}
                    placeholder="Enter input here..."
                  />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="output">
              <Card className="min-h-[500px]">
                <CardHeader>
                  <CardTitle>Output</CardTitle>
                  <CardDescription>Program execution results</CardDescription>
                </CardHeader>
                <CardContent>
                  <pre className="w-full h-[350px] p-2 font-mono text-sm border rounded-md overflow-auto whitespace-pre-wrap">
                    {output || "Run your code to see output here..."}
                  </pre>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

