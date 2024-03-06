from flask import url_for
from .unit import UnitModel
from app.exceptions import QuestError


class Quest():
    def __init__(self):
        self.current = 0
        self.units = []
        self.units.append(UnitModel(len(self.units), 'фарго', hint='Режиссеры - братья Коэны'))
        self.units.append(UnitModel(len(self.units), 'игра престолов', hint='Мужика зовут Джордж Мартин'))
        self.units.append(UnitModel(len(self.units), 'люцифер', hint='Это не "Матрица"'))
        self.units.append(UnitModel(len(self.units), 'большой куш', hint='Пёсиков любишь?'))
        self.units.append(UnitModel(len(self.units), 'терминатор', hint='Киборг-убийца'))
        self.units.append(UnitModel(len(self.units), 'властелин колец'))
        self.units.append(UnitModel(len(self.units), 'гравитация', hint='В чем сила, брат?'))
        self.units.append(UnitModel(len(self.units), 'фильмец'))

    def getUnit(self, id):
        return self.units[id]
        # return self.units[min(self.current, id)]

    def checkUnit(self, *args, id=None, **kwargs):
        # if id != self.current:
        #     raise QuestError

        if self.units[id].check(*args, **kwargs):
            self.current = id + 1
            # self.current += 1
            return url_for('checkUnit', id=self.current) if self.current != len(self.units) else url_for('congrads')

    def unitForm(self, id):
        return self.units[id].getForm()

    def progress(self):
        return self.current / len(self.units) * 100
