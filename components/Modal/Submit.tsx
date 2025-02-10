"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { X } from "lucide-react"
import { submitBounty } from "@/lib/api/collection/bounty"
import { useToast } from "@/hooks/use-toast"
// import { useToast } from "@/components/ui/use-toast"

interface SubmissionModalProps {
  isOpen: boolean
  onClose: () => void
}

export function SubmissionModal({ isOpen, onClose }: SubmissionModalProps) {
  const [submissionLink, setSubmissionLink] = useState("")
  const [tweetLink, setTweetLink] = useState("")
  const [additionalInfo, setAdditionalInfo] = useState("")
  const [walletAddress, setWalletAddress] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = {
        "solution": submissionLink,
        "wallet": walletAddress,
        "userIds": ["67a1515c3a81395e144e81ab"]
    }

    try {
      const response = await submitBounty('sjdjd', formData)
      if (response.ok) {
        // toast({
        //   title: "Submission Successful",
        //   description: "Your bounty submission has been received.",
        // })
        onClose()
      } else {
        const errorData = await response.json()
        throw new Error(errorData.message || "Submission failed")
      }
    } catch (error) {
    //   toast({
    //     title: "Submission Failed",
    //     description: error instanceof Error ? error.message : "An unexpected error occurred",
    //     variant: "destructive",
    //   })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] max-h-[85vh] overflow-y-auto p-4 sm:p-6">
        <DialogHeader className="pb-2">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-semibold">Bounty Submission</DialogTitle>
            {/* <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="h-4 w-4" />
            </Button> */}
          </div>
          <p className="text-sm text-muted-foreground">We can't wait to see what you've created!</p>
        </DialogHeader>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <Label htmlFor="submission-link">
              Link to Your Submission <span className="text-red-500">*</span>
            </Label>
            <Input
              id="submission-link"
              value={submissionLink}
              onChange={(e) => setSubmissionLink(e.target.value)}
              placeholder="Add a link"
              required
            />
            <p className="text-xs text-muted-foreground">Make sure this link is accessible by everyone!</p>
          </div>

          <div className="space-y-1">
            <Label htmlFor="tweet-link">Tweet Link</Label>
            <Input
              id="tweet-link"
              value={tweetLink}
              onChange={(e) => setTweetLink(e.target.value)}
              placeholder="Add a tweet's link"
            />
            <p className="text-xs text-muted-foreground">
              This helps sponsors discover (and maybe repost) your work on Twitter! If this submission is for a Twitter
              thread bounty, you can ignore this field.
            </p>
          </div>

          <div className="space-y-1">
            <Label htmlFor="additional-info">Anything Else?</Label>
            <Textarea
              id="additional-info"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              placeholder="Add info or link"
              className="min-h-[60px]"
            />
            <p className="text-xs text-muted-foreground">
              If you have any other links or information you'd like to share with us, please add them here!
            </p>
          </div>

          <div className="space-y-1">
            <Label htmlFor="wallet-address">Your Sui Wallet Address</Label>
            <Input
              id="wallet-address"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              placeholder="Enter your Sui wallet address"
            />
            <p className="text-xs text-muted-foreground">
              This is where you will receive your rewards if you win. Please ensure you enter a valid Sui wallet
              address.
            </p>
          </div>

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>

          <p className="text-xs text-center text-muted-foreground mt-2">
            By submitting/applying to this listing, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Use
            </a>
            .
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}

