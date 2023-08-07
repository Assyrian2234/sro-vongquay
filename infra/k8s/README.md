docker build -t aupc/snau17-fe .  
docker tag aupc/snau17-fe dockeritc65/snau17-fe:v1.3.8
docker push dockeritc65/snau17-fe:v1.3.8

---

release:
docker build -t aupc/snau17-fe-release .  
docker tag aupc/snau17-fe-release dockeritc65/snau17-fe-release:v0.0.1
docker push dockeritc65/snau17-fe-release:v0.0.1

VPN81
kubectl get pods -n beta
kubectl delete -f beta-ausn17.yaml -n beta
kubectl apply -f beta-ausn17.yaml -n beta

kubectl get cm/cm-snau17-web-beta -n beta
kubectl delete cm/cm-snau17-web-beta -n beta
kubectl create configmap cm-snau17-web-beta --from-file=./.env -n beta
kubectl describe configmaps cm-snau17-web-beta -n beta
kubectl describe po/web-snau17-6485b69cc9-qzbfn -n beta
kubectl exec web-snau17-6485b69cc9-qzbfn -n beta -it -- sh
kubectl logs web-snau17-6485b69cc9-qzbfn -n beta
