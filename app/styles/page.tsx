import { ColorChip } from '@/components/ui/ColorChip'
import { paletteToArray, presets } from '@/lib/generator/palettes'

export default function StylesPage() {
  return (
    <main className="container mx-auto max-w-3xl px-4 py-8 space-y-8">
      <h1 className="text-3xl font-bold mb-4">Бренд‑гайд</h1>
      <p>
        Этот раздел кратко суммирует визуальные принципы, обнаруженные в открытых
        источниках. Главная часть айдентики «Золотого яблока» — фирменный
        лаймовый цвет Pantone 389C (RGB 220 255 0, HEX #DCFF00)【642765226791854†L146-L160】, который
        используется в магазинах, упаковке и маркетинговых материалах. Дополнительные
        оттенки включают фиолетовый и розовый — они позволяют создавать яркие,
        современные комбинации【942344703007850†L92-L99】. В материалах для подростков популярны
        пастельные и неоновые палитры, соответствующие трендам из TikTok и
        k‑pop【158754640104676†L195-L205】.
      </p>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Основная палитра</h2>
        <div className="flex space-x-4">
          <ColorChip color="#DCFF00" label="Primary (Lime)" />
          <ColorChip color="#A355F6" label="Purple" />
          <ColorChip color="#F95FA1" label="Pink" />
          <ColorChip color="#1A1A1A" label="Dark" />
          <ColorChip color="#F8F8F8" label="Light" />
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Пресеты для подростков</h2>
        <p>Ниже приведены палитры для восьми тематических пресетов. Они могут служить отправной точкой для генератора:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {Object.entries(presets).map(([name, palette]) => (
            <div key={name} className="border rounded p-3">
              <h3 className="font-medium mb-2 capitalize">{name}</h3>
              <div className="flex space-x-2">
                {paletteToArray(palette).map((c, i) => (
                  <ColorChip key={i} color={c} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Типографика</h2>
        <p>
          В goldapplebox используется жирный гротескный шрифт без засечек, который
          подчёркивает праздничное настроение и хорошо читается на дистанции【942344703007850†L70-L82】.
          Для текста рекомендуется использовать вариации семейства sans‑serif
          с увеличенным межбуквенным интервалом и капсом для заголовков. Это
          создаёт современный образ, понятный молодым людям.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Паттерны</h2>
        <p>
          Паттерны должны быть простыми и модульными: полоски, точки, клетки и
          диагонали хорошо смотрятся в сочетании с яркими цветами. Выбирайте
          рисунки, которые не отвлекают от основной информации и подчёркивают
          динамику бренда.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Тональность и язык</h2>
        <p>
          Золотое яблоко активно работает с молодой аудиторией и использует
          дружелюбный, дерзкий тон. В разделе teens редакторы говорят с
          подростками на их языке, следят за трендами из TikTok и подхватывают
          вирусные средства【158754640104676†L195-L205】. В наших слоганах используйте короткие
          фразы, эмодзи и сленг, чтобы быть ближе к читателю.
        </p>
      </section>
    </main>
  )
}
