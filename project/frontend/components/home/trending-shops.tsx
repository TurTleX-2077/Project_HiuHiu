'use client'

import { useState, useEffect } from 'react'
import { BACKEND_URL } from '@/lib/api'
import { ShopCard } from '@/components/shop-card'
import { Flame } from 'lucide-react'

export function TrendingShops() {
  const [shops, setShops] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch(`${BACKEND_URL}/api/shops/`, { credentials: 'include' })
      .then(res => res.json())
      .then(data => {
        const arr = Array.isArray(data) ? data : data.results || []
        // เอาร้านที่สถานะปลอดภัย (safe) หรือกำลังตรวจสอบ ไม่เอาร้าน scam
        let topShops = arr.filter(s => s.status !== 'scam')
        topShops.sort((a: any, b: any) => {
           if ((b.average_rating || 0) !== (a.average_rating || 0)) {
             return (b.average_rating || 0) - (a.average_rating || 0);
           }
           if ((b.review_count || 0) !== (a.review_count || 0)) {
             return (b.review_count || 0) - (a.review_count || 0);
           }
           return (b.id || 0) - (a.id || 0);
        })
        setShops(topShops.slice(0, 4))
      })
      .catch(console.error)
      .finally(() => setLoading(false))
  }, [])

  if (loading || shops.length === 0) return null

  return (
    <section className="mt-4 w-full">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-orange-100 p-2 text-orange-600 dark:bg-orange-950/30 dark:text-orange-500">
            <Flame className="size-5" />
          </div>
          <div>
            <h2 className="font-display text-xl font-bold text-foreground">ร้านค้าแนะนำ & ยอดนิยม</h2>
            <p className="text-xs text-muted-foreground mt-0.5">ร้านค้าที่ผ่านการตรวจสอบสถานะความปลอดภัย</p>
          </div>
        </div>
        <a 
          href="/shops" 
          className="text-xs font-semibold text-primary hover:underline flex items-center gap-1 transition-colors"
        >
          ดูร้านค้าทั้งหมด ({shops.length > 0 ? '14+' : ''}) →
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {shops.map(shop => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </section>
  )
}
