import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [isActivated, setIsActivated] = useState(false);
  const [activationCode, setActivationCode] = useState('');
  const { toast } = useToast();

  const pilotData = {
    name: 'Капитан Ахмед Хасан',
    callsign: 'EGY001',
    rank: 'Старший пилот',
    totalFlights: 247,
    totalHours: 1834.5,
    successRate: 98.4,
    experience: 85
  };

  const routes = [
    { id: 1, from: 'CAI', to: 'DXB', fromCity: 'Каир', toCity: 'Дубай', distance: 2416, duration: '3ч 20м', aircraft: 'Boeing 737-800' },
    { id: 2, from: 'CAI', to: 'JED', fromCity: 'Каир', toCity: 'Джидда', distance: 1236, duration: '2ч 10м', aircraft: 'Airbus A320' },
    { id: 3, from: 'SSH', to: 'HRG', fromCity: 'Шарм-эль-Шейх', toCity: 'Хургада', distance: 412, duration: '55м', aircraft: 'Embraer E190' },
    { id: 4, from: 'CAI', to: 'IST', fromCity: 'Каир', toCity: 'Стамбул', distance: 1125, duration: '2ч 5м', aircraft: 'Boeing 777-300ER' },
  ];

  const fleet = [
    { type: 'Boeing 737-800', count: 12, seats: 189, range: 5436, speed: 842 },
    { type: 'Airbus A320', count: 8, seats: 180, range: 6100, speed: 828 },
    { type: 'Boeing 777-300ER', count: 4, seats: 396, range: 13649, speed: 905 },
    { type: 'Embraer E190', count: 6, seats: 114, range: 4537, speed: 829 },
  ];

  const rankings = [
    { rank: 1, pilot: 'Капитан Ахмед Хасан', callsign: 'EGY001', flights: 247, hours: 1834.5, success: 98.4 },
    { rank: 2, pilot: 'Капитан Мохамед Али', callsign: 'EGY045', flights: 231, hours: 1720.3, success: 97.8 },
    { rank: 3, pilot: 'Капитан Омар Фарук', callsign: 'EGY012', flights: 219, hours: 1652.8, success: 97.2 },
    { rank: 4, pilot: 'Капитан Карим Юсеф', callsign: 'EGY088', flights: 203, hours: 1548.7, success: 96.9 },
    { rank: 5, pilot: 'Капитан Хусейн Салем', callsign: 'EGY034', flights: 198, hours: 1501.2, success: 96.5 },
  ];

  const handleActivation = () => {
    if (activationCode.trim() === '202601702') {
      setIsActivated(true);
      toast({
        title: 'Добро пожаловать!',
        description: 'Активация прошла успешно. Приятных полётов!',
      });
    } else {
      toast({
        title: 'Ошибка активации',
        description: 'Неверный код активации. Проверьте правильность ввода.',
        variant: 'destructive',
      });
    }
  };

  if (!isActivated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-sky-900 flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iIzBFQTVFOSIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <Card className="w-full max-w-md p-8 bg-white/10 backdrop-blur-xl border-white/20 animate-fade-in relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/20 rounded-full blur-3xl -mr-32 -mt-32"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-sky-400 to-sky-600 rounded-full mb-4 animate-scale-in">
                <Icon name="Plane" size={40} className="text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-2">Египетские Авиалинии</h1>
              <p className="text-sky-200 text-lg">Virtual Group</p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-white mb-2 block">
                  Индивидуальный код активации
                </label>
                <Input
                  type="text"
                  placeholder="Введите ваш код"
                  value={activationCode}
                  onChange={(e) => setActivationCode(e.target.value)}
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/40 focus:border-sky-400"
                  onKeyDown={(e) => e.key === 'Enter' && handleActivation()}
                />
              </div>

              <Button 
                onClick={handleActivation}
                className="w-full bg-gradient-to-r from-sky-500 to-sky-600 hover:from-sky-600 hover:to-sky-700 text-white font-semibold py-6 transition-all hover-scale"
              >
                Активировать аккаунт
                <Icon name="ArrowRight" size={20} className="ml-2" />
              </Button>

              <div className="text-center text-sm text-sky-200/60 pt-4">
                <p>Нет кода? Свяжитесь с администрацией холдинга</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-navy-900 via-navy-800 to-sky-900">
      <header className="bg-navy-950/50 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
                <Icon name="Plane" size={24} className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Египетские Авиалинии VG</h1>
                <p className="text-xs text-sky-300">Портал виртуального пилота</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge className="bg-amber-500/20 text-amber-300 border-amber-500/30">
                <Icon name="Award" size={14} className="mr-1" />
                {pilotData.rank}
              </Badge>
              <Avatar className="border-2 border-sky-500">
                <AvatarFallback className="bg-gradient-to-br from-sky-500 to-sky-700 text-white font-bold">
                  {pilotData.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs defaultValue="dashboard" className="space-y-6">
          <TabsList className="bg-navy-950/50 border border-white/10 p-1">
            <TabsTrigger value="dashboard" className="data-[state=active]:bg-sky-600">
              <Icon name="LayoutDashboard" size={16} className="mr-2" />
              Кабинет
            </TabsTrigger>
            <TabsTrigger value="routes" className="data-[state=active]:bg-sky-600">
              <Icon name="Map" size={16} className="mr-2" />
              Маршруты
            </TabsTrigger>
            <TabsTrigger value="fleet" className="data-[state=active]:bg-sky-600">
              <Icon name="Plane" size={16} className="mr-2" />
              Флот
            </TabsTrigger>
            <TabsTrigger value="flights" className="data-[state=active]:bg-sky-600">
              <Icon name="Calendar" size={16} className="mr-2" />
              Рейсы
            </TabsTrigger>
            <TabsTrigger value="rankings" className="data-[state=active]:bg-sky-600">
              <Icon name="Trophy" size={16} className="mr-2" />
              Рейтинг
            </TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6 animate-fade-in">
            <Card className="bg-gradient-to-br from-sky-600 to-sky-800 border-0 p-6 text-white">
              <div className="flex items-start justify-between">
                <div className="flex gap-4">
                  <Avatar className="w-20 h-20 border-4 border-white/30">
                    <AvatarFallback className="bg-white/20 text-white text-2xl font-bold">
                      {pilotData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h2 className="text-2xl font-bold mb-1">{pilotData.name}</h2>
                    <p className="text-sky-100 mb-2">Позывной: {pilotData.callsign}</p>
                    <Badge className="bg-amber-500 text-white border-0">
                      <Icon name="Award" size={14} className="mr-1" />
                      {pilotData.rank}
                    </Badge>
                  </div>
                </div>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Icon name="Settings" size={16} className="mr-2" />
                  Настройки
                </Button>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 hover-scale transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-lg flex items-center justify-center">
                    <Icon name="CalendarCheck" size={24} className="text-sky-400" />
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    +12 за месяц
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{pilotData.totalFlights}</div>
                <div className="text-sm text-sky-200">Всего рейсов</div>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 hover-scale transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center">
                    <Icon name="Clock" size={24} className="text-amber-400" />
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    +87ч за месяц
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{pilotData.totalHours}ч</div>
                <div className="text-sm text-sky-200">Налёт часов</div>
              </Card>

              <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6 hover-scale transition-all">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                    <Icon name="TrendingUp" size={24} className="text-green-400" />
                  </div>
                  <Badge className="bg-green-500/20 text-green-300 border-green-500/30">
                    Отлично
                  </Badge>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{pilotData.successRate}%</div>
                <div className="text-sm text-sky-200">Успешность</div>
              </Card>
            </div>

            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
              <h3 className="text-xl font-bold text-white mb-4">Уровень опыта</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-white font-medium">Прогресс до следующего звания</span>
                    <span className="text-sky-300 font-bold">{pilotData.experience}%</span>
                  </div>
                  <Progress value={pilotData.experience} className="h-3 bg-navy-800" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-4">
                  <div className="bg-navy-800/50 rounded-lg p-3 text-center">
                    <Icon name="Award" size={24} className="text-amber-400 mx-auto mb-2" />
                    <div className="text-xs text-sky-200">Первый полёт</div>
                  </div>
                  <div className="bg-navy-800/50 rounded-lg p-3 text-center">
                    <Icon name="Target" size={24} className="text-sky-400 mx-auto mb-2" />
                    <div className="text-xs text-sky-200">100 рейсов</div>
                  </div>
                  <div className="bg-navy-800/50 rounded-lg p-3 text-center">
                    <Icon name="Zap" size={24} className="text-amber-400 mx-auto mb-2" />
                    <div className="text-xs text-sky-200">1000 часов</div>
                  </div>
                  <div className="bg-navy-800/50 rounded-lg p-3 text-center opacity-40">
                    <Icon name="Crown" size={24} className="text-gray-400 mx-auto mb-2" />
                    <div className="text-xs text-gray-400">Элитный статус</div>
                  </div>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="routes" className="space-y-4 animate-fade-in">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Доступные направления</h3>
              <div className="space-y-3">
                {routes.map((route) => (
                  <Card key={route.id} className="bg-navy-800/50 border-white/10 p-4 hover:bg-navy-800/70 transition-all hover-scale cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6 flex-1">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{route.from}</div>
                          <div className="text-xs text-sky-300">{route.fromCity}</div>
                        </div>
                        
                        <div className="flex-1 flex items-center gap-2">
                          <div className="h-px bg-sky-500/30 flex-1"></div>
                          <Icon name="Plane" size={20} className="text-sky-400" />
                          <div className="h-px bg-sky-500/30 flex-1"></div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white">{route.to}</div>
                          <div className="text-xs text-sky-300">{route.toCity}</div>
                        </div>

                        <div className="hidden md:flex flex-col gap-1 ml-8">
                          <div className="flex items-center gap-2 text-sm text-sky-200">
                            <Icon name="Clock" size={14} />
                            <span>{route.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm text-sky-200">
                            <Icon name="Route" size={14} />
                            <span>{route.distance} км</span>
                          </div>
                        </div>

                        <Badge className="bg-sky-500/20 text-sky-300 border-sky-500/30">
                          {route.aircraft}
                        </Badge>
                      </div>

                      <Button className="bg-sky-600 hover:bg-sky-700 ml-4">
                        <Icon name="Plus" size={16} className="mr-2" />
                        Запланировать
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="fleet" className="space-y-4 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {fleet.map((aircraft, idx) => (
                <Card key={idx} className="bg-white/10 backdrop-blur-lg border-white/20 p-6 hover-scale transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1">{aircraft.type}</h3>
                      <Badge className="bg-sky-500/20 text-sky-300 border-sky-500/30">
                        {aircraft.count} в парке
                      </Badge>
                    </div>
                    <div className="w-16 h-16 bg-sky-500/20 rounded-lg flex items-center justify-center">
                      <Icon name="Plane" size={32} className="text-sky-400" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                    <div>
                      <div className="text-xs text-sky-300 mb-1">Вместимость</div>
                      <div className="text-lg font-bold text-white">{aircraft.seats}</div>
                    </div>
                    <div>
                      <div className="text-xs text-sky-300 mb-1">Дальность</div>
                      <div className="text-lg font-bold text-white">{aircraft.range}км</div>
                    </div>
                    <div>
                      <div className="text-xs text-sky-300 mb-1">Скорость</div>
                      <div className="text-lg font-bold text-white">{aircraft.speed}км/ч</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="flights" className="space-y-4 animate-fade-in">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Регистрация рейса</h3>
                <Button className="bg-green-600 hover:bg-green-700">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Новый рейс
                </Button>
              </div>
              
              <div className="text-center py-12">
                <div className="w-24 h-24 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="CalendarPlus" size={48} className="text-sky-400" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">Выберите маршрут</h4>
                <p className="text-sky-300 mb-6">Перейдите во вкладку "Маршруты" и запланируйте полёт</p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="rankings" className="space-y-4 animate-fade-in">
            <Card className="bg-white/10 backdrop-blur-lg border-white/20 p-6">
              <h3 className="text-2xl font-bold text-white mb-6">Рейтинг пилотов холдинга</h3>
              
              <div className="space-y-2">
                {rankings.map((pilot) => (
                  <Card key={pilot.rank} className={`p-4 transition-all ${
                    pilot.rank === 1 
                      ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/20 border-amber-500/30' 
                      : 'bg-navy-800/50 border-white/10 hover:bg-navy-800/70'
                  }`}>
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-bold text-xl ${
                        pilot.rank === 1 ? 'bg-amber-500 text-white' :
                        pilot.rank === 2 ? 'bg-gray-400 text-white' :
                        pilot.rank === 3 ? 'bg-amber-700 text-white' :
                        'bg-navy-700 text-sky-300'
                      }`}>
                        {pilot.rank === 1 ? '🏆' : pilot.rank}
                      </div>

                      <div className="flex-1">
                        <div className="font-semibold text-white">{pilot.pilot}</div>
                        <div className="text-sm text-sky-300">{pilot.callsign}</div>
                      </div>

                      <div className="hidden md:flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <div className="font-bold text-white">{pilot.flights}</div>
                          <div className="text-xs text-sky-300">Рейсов</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-white">{pilot.hours}ч</div>
                          <div className="text-xs text-sky-300">Налёт</div>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-green-400">{pilot.success}%</div>
                          <div className="text-xs text-sky-300">Успех</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Index;