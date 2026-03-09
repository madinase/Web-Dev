class Infected:
    def __init__(self, stage_name, hp, isAlive = True):
        self.stage_name = stage_name
        self.hp = hp
        self.isAlive = isAlive

    def __str__(self):
        return f"{self.stage_name}"

    def attack(self):
        return f"{self.stage_name} атакует!"
    
    def make_sound(self):
        return "Ррррр..."
        
    def killed(self):
        self.isAlive = False
        return f"{self.stage_name} убит!"

    def kill_elly(self):
        return f"{self.stage_name} убивает Элли!"


class Clicker(Infected):
    def __init__(self):
        self.stage_name = "Щелкун"
        self.hp = 2
        self.isAlive = True

    
    def echolocation(self):
        return f"{self.stage_name} использует эхолокацию, чтобы найти свою жертву!"
    
    def attack(self):
        return f"{self.stage_name} мгновенно убивает в ближнем бою"
    
    def make_sound(self):
        return "Клик-клик..."
    
    def killed(self):
        self.isAlive = False
        return f"{self.stage_name} убит! Два выстрела четко в голову!"
    
    def kill_elly(self):
        return f"{self.stage_name} бежит и убивает Элли одним ударом!"

class Shambler(Infected):
    def __init__(self):
        self.stage_name = "Шаркун"
        self.hp = 3
        self.isAlive = True

    
    def gas_release(self):
        return f"{self.stage_name} выпускает облако ядовитого газа, который наносит урон и замедляет Элли!"
    
    def attack(self):
        return f"{self.stage_name} бросает кислотный шарик!"

    def make_sound(self):
        return "Шшшш..."
    
    def killed(self):
        self.isAlive = False
        return f"{self.stage_name} убит! Элли быстро сбегает, от посмертной детонации!"

    def kill_elly(self):
        return f"{self.stage_name} попадает по Элли и убивает кислотой!"
    
class Bloater(Infected):
    def __init__(self):
        self.stage_name = "Топляк"
        self.hp = 10
        self.isAlive = True

    
    def armor(self):
        return f"{self.stage_name} имеет толстую кожу, которая защищает его от большинства атак Элли!"
    
    def attack(self):
        return f"{self.stage_name} ТАРАНИТ ВСЕ ПОДРЯД И ХОЧЕТ УБИТЬ ЭЛЛИ!!!!"
    
    def make_sound(self):
        return "ГРРРРР!!!"

    def killed(self):
        self.isAlive = False
        return f"{self.stage_name} убит! Элли использует все свое оружие и ресурсы, чтобы победить этого монстра!"
    
    def kill_elly(self):
        return f"{self.stage_name} с огромной силой таранит Элли и давит ее насмерть!"
