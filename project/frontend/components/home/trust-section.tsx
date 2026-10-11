import { ShieldCheck, Search, Users, AlertTriangle, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export function TrustAndHowItWorks() {
  const steps = [
    {
      icon: Search,
      title: '1. ค้นหาร้านค้า',
      desc: 'เลือกร้านรับหิ้วจากหมวดหมู่ หรือแพลตฟอร์ม X, IG, Facebook ที่คุณสนใจ',
      badge: 'สำรวจง่าย',
    },
    {
      icon: ShieldCheck,
      title: '2. เช็กประวัติความปลอดภัย',
      desc: 'ตรวจชื่อบัญชี เบอร์พร้อมเพย์ หรือลิงก์ร้าน ผ่านระบบฐานข้อมูลและ Google',
      badge: 'แม่นยำ 100%',
    },
    {
      icon: Users,
      title: '3. ส่งต่อรีวิว & ช่วยเตือนภัย',
      desc: 'ช้อปอย่างมั่นใจ ให้คะแนนร้านค้า หรือแจ้งเบาะแสเพื่อปกป้องสังคมนักช้อป',
      badge: 'คอมมูนิตี้เข้มแข็ง',
    },
  ]

  const stats = [
    { value: '14+', label: 'ร้านค้าที่ผ่านการคัดกรอง' },
    { value: '100%', label: 'ตรวจสอบก่อนสั่งซื้อ' },
    { value: '24 ชม.', label: 'ฐานข้อมูลอัปเดตต่อเนื่อง' },
    { value: 'ปลอดภัย', label: 'ระบบกรองข้อมูลมิจฉาชีพ' },
  ]

  return (
    <div className="space-y-12 pt-6">
      {/* 1. สถิติความเชื่อมั่น Trust Stats Bar */}
      <section className="rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm sm:p-8">
        <div className="grid grid-cols-2 gap-6 divide-y sm:grid-cols-4 sm:divide-x sm:divide-y-0 divide-border/60">
          {stats.map((stat, i) => (
            <div key={i} className={`flex flex-col items-center justify-center text-center ${i > 0 ? 'pt-4 sm:pt-0' : ''}`}>
              <span className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                {stat.value}
              </span>
              <span className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 2. 3 ขั้นตอนง่ายๆ ในการใช้งาน How it works */}
      <section className="space-y-6">
        <div className="text-center">
          <h2 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            ช้อปปิ้งปลอดภัย มั่นใจได้ทุกออเดอร์
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">
            HiuHiu ช่วยให้คุณหาสินค้าพรีออเดอร์และร้านรับหิ้วได้อย่างสบายใจ ผ่าน 3 ขั้นตอนง่ายๆ
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-2xl border border-border bg-card p-6 transition duration-200 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition group-hover:scale-105">
                      <Icon className="size-6" />
                    </div>
                    <span className="rounded-full bg-secondary px-3 py-1 text-[11px] font-medium text-muted-foreground">
                      {step.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* 3. Call-to-action Banner สำหรับแจ้งเบาะแส หรือแนะนำร้าน */}
      <section className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-card via-card to-primary/10 p-6 sm:p-10">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="max-w-xl space-y-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-xs font-semibold text-red-500">
              <AlertTriangle className="size-3.5" />
              <span>ร่วมสร้างสังคมช้อปปิ้งที่ปลอดภัย</span>
            </div>
            <h3 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              พบร้านค้าไม่ส่งของ หรือมีพฤติกรรมน่าสงสัย?
            </h3>
            <p className="text-xs text-muted-foreground sm:text-sm">
              ช่วยแจ้งเบาะแสเพื่อเตือนเพื่อนๆ ผู้บริโภค ไม่ให้ตกเป็นเหยื่อมิจฉาชีพในวงการรับหิ้ว
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/shops"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-secondary px-5 text-xs font-semibold text-foreground transition hover:bg-secondary/80"
            >
              <span>ค้นหาร้านค้า</span>
            </Link>
            <button
              onClick={() => {
                // คลิกเปิด report modal ที่มีปุ่มอยู่ใน site-header หรือ scroll ขึ้น
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-red-600 px-5 text-xs font-semibold text-white shadow-md shadow-red-600/20 transition hover:bg-red-700"
            >
              <AlertTriangle className="size-4" />
              <span>แจ้งเบาะแสคนโกง</span>
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
