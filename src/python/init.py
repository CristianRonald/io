import json
import os
import numpy as np
class simplex:
    def __init__(self,b,C,A,Xb,n_res):
        self.b = b
        self.C = C
        self.A = A
        self.Xb = Xb
        self.n_res = n_res ##Numero de restricciones
        self.Cb = []
        self.B = []
        self.v = []
        self.setBasicas()
    def setBasicas(self):
        self.Cb = []
        self.B = []
        for x in self.Xb:
            self.Cb.append(self.C[x])
        for i in range(self.n_res):
            a = []
            for n in self.Xb:
                a.append(self.A[i][n])
            self.B.append(a)
        self.varEntrante(self.B,self.Cb)
    def varEntrante(self,B,Cb):
        try:
            Bn = np.linalg.inv(B)
            a = np.dot(np.transpose(Cb),Bn)
            res = np.dot(a,self.A)
            n = []
            for i in range(len(res)):
                n.append(res[i]-self.C[i])
            aux = n[0]
            cont = 0
            for i,x in enumerate(n):
                if aux>x:
                    aux = x
                    cont = i
            print(self.Xb)
            if aux<0:
                d = self.varSalida(Bn,cont)
                self.actualizar(Bn,np.dot(Bn,self.A),n,np.dot(a,self.b),np.dot(Bn,self.b))
                self.Xb[d] = cont
                self.setBasicas()
            else:
                self.actualizar(Bn,np.dot(Bn,self.A),n,np.dot(a,self.b))
                return -1
        except Exception as e:
            print(e)
            return -1
    def getColumna(self,matriz,pos):
        c = []
        for i in range(self.n_res):
            a = [matriz[i][pos]]
            c.append(a)
        return c
    def varSalida(self,Bn,pos):
        col = self.getColumna(np.dot(Bn,self.A),pos)
        col1 = np.dot(Bn,self.b)
        for i,x in enumerate(col):
            if x[0] == 0:
                col[i][0]=0.0001
        res = col1/col
        r = res[0]
        cont = 0
        for i,x in enumerate(res):
            if r>x and x>0:
                r = x
                cont = i
        return cont
    def actualizarFile(self,s):
        with open(r_a, "r") as archivo:
            d = json.load(archivo)
        with open(r_a, "w") as archivo:
            d["iteraciones"].append(s)
            json.dump(d, archivo, indent=2)
    def actualizar(self,Bn,a,b,resul,h):
        s = {}
        s["Xb"] = self.Xb
        s["Cb"] = self.Cb
        s["B"] = self.B
        s["resultado"] = resul.tolist()
        for i in range(self.n_res):
            for x in Bn[i]:
              np.append(a[i],x)
        np.append(a,b)
        s["matriz"]= a.tolist()
        s["results"]= h.tolist()
        self.actualizarFile(s)
r_a = os.path.join("..","datos.json")

with open(r_a, "r") as archivo:
    data = json.load(archivo)
S = simplex(
    data["valores"]["b"],
    data["valores"]["C"],
    data["valores"]["A"],
    data["valores"]["Xb_i"],
    data["valores"]["n_res"],
        )
