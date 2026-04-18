"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Send, CheckCircle2, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

interface ContactFormProps {
  variant?: "standalone" | "embedded"
}

export default function ContactForm({ variant = "standalone" }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  if (submitted) {
    return (
      <Card className={cn(variant === "embedded" && "border-0 shadow-none bg-transparent")}>
        <CardContent className="flex flex-col items-center justify-center py-16 text-center">
          <div className="mb-4 flex size-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="size-8 text-primary" />
          </div>
          <h3 className="mb-2 text-xl font-semibold text-foreground">Message Sent!</h3>
          <p className="max-w-sm text-sm text-muted-foreground">
            Thank you for reaching out to Guru Marine Services. We will get back to you immediately.
          </p>
        </CardContent>
      </Card>
    )
  }

  const formContent = (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="vesselName">Vessel Name</Label>
          <Input id="vesselName" placeholder="MV Example" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="port">Port Location in India</Label>
          <Input id="port" placeholder="Kandla / Mumbai / etc." required />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" type="email" placeholder="captain@company.com" required />
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="phone">Phone Number</Label>
          <Input id="phone" type="tel" placeholder="+XX (XXX) 000-0000" />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="service">Service Required</Label>
        <Select>
          <SelectTrigger id="service">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ship-chandling">Ship Chandling</SelectItem>
            <SelectItem value="ship-repairs">Ship Repairs</SelectItem>
            <SelectItem value="bond-store">Bond Store Suppliers</SelectItem>
            <SelectItem value="fresh-water">Fresh Water Suppliers</SelectItem>
            <SelectItem value="garbage-disposal">Garbage Disposal</SelectItem>
            <SelectItem value="sludge-disposal">Sludge Disposal</SelectItem>
            <SelectItem value="other">Other Inquiry</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message / Requisition List</Label>
        <Textarea
          id="message"
          placeholder="Please provide your requisition details, repair scope, or disposal volumes..."
          rows={5}
          required
        />
      </div>

      <Button type="submit" size="lg" className="mt-2 gap-2">
        <Send className="size-4" />
        Send Message
      </Button>

      <p className="text-center text-xs text-muted-foreground">
        For immediate assistances at any India port, call +91 9825737080
      </p>
    </form>
  )

  if (variant === "embedded") {
    return formContent
  }

  return (
    <Card>
      <CardHeader>
        <div className="mb-1">
          <Badge
            variant="secondary"
            className="gap-1.5 border border-border px-3 py-1.5 text-xs font-medium uppercase tracking-wider"
          >
            <MessageSquare className="size-3.5 text-primary" />
            Supply Requisition
          </Badge>
        </div>
        <CardTitle className="text-2xl">Send Your Inquiry</CardTitle>
        <CardDescription>
          Fill out the form below detailing your vessel's requirements and we will revert with pricing and logistics.
        </CardDescription>
      </CardHeader>
      <CardContent>{formContent}</CardContent>
    </Card>
  )
}
