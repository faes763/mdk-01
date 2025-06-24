'use client'

import React, { useState } from 'react'
import Image from "next/image";
import { ConsultationDialog } from '../components/ConsultationDialog'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Textarea } from '../components/ui/textarea'

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Отправка формы:', formData)
    alert('Спасибо! Мы свяжемся с вами в течение часа.')
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
  }

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/10 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <div className="mb-4 inline-block text-lg px-4 py-2 bg-secondary text-secondary-foreground rounded-full">
            🚀 Инновационные IT-решения
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            DCIEL
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-3xl mx-auto">
            Профессиональные IT-решения и консалтинг для развития вашего бизнеса. 
            Превращаем технологии в конкурентные преимущества.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationDialog>
              <Button size="lg" className="h-12 px-8 text-lg">
                Получить консультацию
              </Button>
            </ConsultationDialog>
            <Button variant="outline" size="lg" className="h-12 px-8 text-lg">
              Посмотреть портфолио
            </Button>
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Почему выбирают нас
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Быстрое решение',
                description: 'Реализуем проекты в сжатые сроки без ущерба качеству'
              },
              {
                icon: '🎯',
                title: 'Индивидуальный подход',
                description: 'Каждое решение адаптировано под специфику вашего бизнеса'
              },
              {
                icon: '🛡️',
                title: 'Надежность',
                description: 'Гарантируем стабильность и безопасность всех решений'
              },
              {
                icon: '📈',
                title: 'Масштабируемость',
                description: 'Решения растут вместе с вашим бизнесом'
              },
              {
                icon: '🎨',
                title: 'Современный дизайн',
                description: 'Создаем интуитивные и красивые интерфейсы'
              },
              {
                icon: '🔧',
                title: 'Техподдержка 24/7',
                description: 'Всегда готовы помочь и решить любые вопросы'
              }
            ].map((feature, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm hover:shadow-lg transition-shadow p-6">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы клиентов */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Отзывы клиентов
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Алексей Иванов',
                position: 'CEO TechStart',
                text: 'DCIEL помогли нам запустить продукт на месяц раньше срока. Отличная команда!',
                rating: 5
              },
              {
                name: 'Мария Петрова',
                position: 'Директор FinanceFlow',
                text: 'Профессиональный подход и качественное исполнение. Рекомендуем!',
                rating: 5
              },
              {
                name: 'Игорь Сидоров',
                position: 'CTO DataCorp',
                text: 'Решили сложную техническую задачу, которую не могли закрыть 6 месяцев.',
                rating: 5
              }
            ].map((review, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-500">★</span>
                  ))}
                </div>
                <h4 className="font-semibold text-lg mb-1">{review.name}</h4>
                <p className="text-sm text-muted-foreground mb-3">{review.position}</p>
                <p className="text-muted-foreground">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Демонстрация услуг */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Наши услуги
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Полный цикл разработки
              </h3>
              <ul className="space-y-4">
                {[
                  'Веб-приложения и сайты',
                  'Мобильные приложения',
                  'CRM и ERP системы',
                  'Интеграция с внешними сервисами',
                  'Облачные решения',
                  'DevOps и автоматизация'
                ].map((service, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                      <span className="text-primary-foreground text-sm">✓</span>
                    </div>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">💻</div>
                  <p className="text-lg text-muted-foreground">
                    Современные технологии<br />
                    для вашего бизнеса
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Статистика */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100+', label: 'Проектов' },
              { number: '98%', label: 'Довольных клиентов' },
              { number: '5+', label: 'Лет опыта' },
              { number: '24/7', label: 'Поддержка' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg opacity-90">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Тарифы */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Тарифные планы
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Базовый',
                price: '50 000',
                period: 'от',
                features: [
                  'Лендинг страница',
                  'Адаптивный дизайн',
                  'SEO оптимизация',
                  'Базовая аналитика',
                  'Техподдержка 30 дней'
                ],
                popular: false
              },
              {
                name: 'Профессиональный',
                price: '150 000',
                period: 'от',
                features: [
                  'Корпоративный сайт',
                  'CMS система',
                  'Интеграции',
                  'Расширенная аналитика',
                  'Техподдержка 90 дней',
                  'Обучение команды'
                ],
                popular: true
              },
              {
                name: 'Премиум',
                price: 'По запросу',
                period: '',
                features: [
                  'Комплексное решение',
                  'Индивидуальная разработка',
                  'Все интеграции',
                  'Персональный менеджер',
                  'Безлимитная поддержка',
                  'Приоритетное развитие'
                ],
                popular: false
              }
            ].map((plan, index) => (
              <div key={index} className={`relative rounded-lg border bg-card text-card-foreground shadow-sm p-6 ${plan.popular ? 'border-primary shadow-lg scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
                    Популярный
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold">
                    {plan.period && <span className="text-base font-normal">{plan.period} </span>}
                    {plan.price}
                    {plan.period && <span className="text-base font-normal"> ₽</span>}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xs">✓</span>
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <ConsultationDialog>
                  <Button 
                    variant={plan.popular ? 'default' : 'outline'}
                    className={`w-full h-10 px-4 py-2 cursor-pointer rounded-md font-medium transition-colors ${plan.popular ? 'bg-primary text-primary-foreground hover:bg-primary/90' : 'border border-input bg-background hover:bg-accent hover:text-accent-foreground'}`}
                  >
                    Выбрать план
                  </Button>
                </ConsultationDialog>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-primary to-accent text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Готовы начать ваш проект?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Свяжитесь с нами сегодня и получите бесплатную консультацию 
            по развитию вашего бизнеса с помощью современных технологий.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ConsultationDialog>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 h-12 px-8 text-lg">
                Связаться с нами
              </Button>
            </ConsultationDialog>
            <Button variant="outline" size="lg" className="border border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8 text-lg">
              Скачать презентацию
            </Button>
          </div>
        </div>
      </section>

      {/* Форма контакта */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="text-muted-foreground mb-8">
                Оставьте заявку, и мы свяжемся с вами в течение часа для обсуждения вашего проекта.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📧</span>
                  <span>hello@dciel.ru</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📱</span>
                  <span>+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">📍</span>
                  <span>Москва, ул. Инновационная, 42</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
              <div className="p-6 border-b">
                <h3 className="text-xl font-semibold">Оставить заявку</h3>
                <p className="text-muted-foreground mt-1">Заполните форму и мы свяжемся с вами</p>
              </div>
              <div className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="contact-name">Имя *</Label>
                    <Input
                      id="contact-name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder="your@email.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-phone">Телефон</Label>
                    <Input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+7 (999) 123-45-67"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите о ваших задачах и целях..."
                      rows={4}
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Отправить заявку
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Часто задаваемые вопросы
          </h2>
          <div className="space-y-6">
            {[
              {
                question: 'Сколько времени занимает разработка?',
                answer: 'Сроки зависят от сложности проекта. Лендинг - 1-2 недели, корпоративный сайт - 1-2 месяца, комплексная система - от 3 месяцев.'
              },
              {
                question: 'Предоставляете ли вы гарантию?',
                answer: 'Да, мы предоставляем гарантию на все наши решения. Гарантийный период зависит от типа проекта и составляет от 6 до 24 месяцев.'
              },
              {
                question: 'Можете ли работать с нашим дизайном?',
                answer: 'Конечно! Мы можем работать как с готовыми дизайн-макетами, так и создать дизайн с нуля в соответствии с вашими требованиями.'
              },
              {
                question: 'Какие технологии вы используете?',
                answer: 'Мы работаем с современным стеком технологий: React, Next.js, Node.js, Python, PostgreSQL, MongoDB, AWS, Docker и многими другими.'
              },
              {
                question: 'Есть ли техподдержка после запуска?',
                answer: 'Да, мы предоставляем техническую поддержку и сопровождение всех проектов. Условия поддержки обсуждаются индивидуально.'
              }
            ].map((faq, index) => (
              <div key={index} className="rounded-lg border bg-card text-card-foreground shadow-sm">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold">{faq.question}</h3>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">DCIEL</h3>
              <p className="text-muted-foreground mb-4">
                Профессиональные IT-решения для развития вашего бизнеса.
              </p>
              <div className="flex gap-4">
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📧</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">💬</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">📱</span>
                <span className="text-2xl cursor-pointer hover:scale-110 transition-transform">🌐</span>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Веб-разработка</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Мобильные приложения</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">CRM системы</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Консалтинг</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Портфолио</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>hello@dciel.ru</li>
                <li>+7 (999) 123-45-67</li>
                <li>Москва, ул. Инновационная, 42</li>
              </ul>
            </div>
          </div>
          <div className="border-t my-8"></div>
          <div className="flex flex-col md:flex-row justify-between items-center text-muted-foreground">
            <p>&copy; 2024 DCIEL. Все права защищены.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-foreground transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-foreground transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
