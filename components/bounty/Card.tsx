/* eslint-disable @typescript-eslint/no-explicit-any */
"use client"

import { Briefcase, Clock, CheckCircle } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PrizeCard({setShowModal, setShowLoginModal, isAuthenticated, data}:any) {

  const total = Number(data?.reward.first) + Number(data?.reward.second) + Number(data?.reward.third)
  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden rounded-3xl">
      <CardHeader className="p-6">
        <h2 className="text-xl text-[#667085] mb-4">Prize</h2>
        <div className="flex items-center gap-3 mb-6">
          {/* <Image
            src="d"
            alt="SOL Token"
            width={48}
            height={48}
            className="rounded-full"
          /> */}
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-semibold">{total}</span>
            <span className="text-4xl font-semibold text-[#2E90FA]">SUI</span>
            <span className="text-xl text-[#667085]">Total Prizes</span>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2E90FA]" />
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-medium">{data?.reward?.first}</span>
              <span className="text-2xl font-medium text-[#2E90FA]">SUI</span>
              <span className="text-lg text-[#667085]">1st</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2E90FA]" />
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-medium">{data?.reward?.second}</span>
              <span className="text-2xl font-medium text-[#2E90FA]">SUI</span>
              <span className="text-lg text-[#667085]">2nd</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-[#2E90FA]" />
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-medium">{data?.reward?.third}</span>
              <span className="text-2xl font-medium text-[#2E90FA]">SUI</span>
              <span className="text-lg text-[#667085]">3rd</span>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="bg-gray-50 p-6 space-y-6">
        <div className="flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-[#2E90FA]" />
          <span className="text-3xl font-semibold">0</span>
          <span className="text-lg text-[#667085]">Submission</span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-[#2E90FA]" />
          <span className="text-3xl font-semibold">5d:9h:57m</span>
          <span className="text-lg text-[#667085]">Remaining</span>
        </div>
      </CardContent>
      <CardFooter className="p-6">
        <Button onClick={()=> {
                    if(isAuthenticated){
                        setShowModal(true)
                    }else{
                        setShowLoginModal(true)
                    }
                    }} className="w-full h-14 text-lg bg-[#2E90FA] hover:bg-[#2E90FA]/90 rounded-xl">
          <CheckCircle className="w-5 h-5 mr-2" />
          Submit Now
        </Button>
      </CardFooter>
    </Card>
  )
}