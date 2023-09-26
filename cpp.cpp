#include<iostream>
// #include <bits/stdc++.h>
using namespace std;
struct Edge{
    int src,dest,wt;
};
struct Graph{
    int v,e;
    struct Edge* edge;
};
struct Graph* creategraph(int v,int e){
    Graph *graph=new Graph;
    graph->v=v;
    graph->e=e;
    graph->edge= new Edge[e];
    return graph;
};
void print(int dist[],int v){
    for(int i=0;i<v;i++){
        cout<<"Vertex: "<<i<<" Distance from source: "<<dist[i]<<endl;
    }
}
void bellman_ford(struct Graph* graph,int src){
    int v=graph->v;
    int e=graph->e;
    int ans[v];
    for(int i=0;i<v;i++)
        ans[i]=INT_MAX;
    ans[src]=0;
    for(int i=1;i<v;i++){
        for(int j=0;j<e;j++){
            int u=graph->edge[j].src;
            int v=graph->edge[j].dest;
            int wt=graph->edge[j].wt;
              if(ans[u]!=INT_MAX && ans[u]+wt<ans[v])
                ans[v]=ans[u]=wt;
        }
    }
    for(int j=0;j<e;j++){
        int u=graph->edge[j].src;
        int v=graph->edge[j].dest;
        int wt=graph->edge[j].wt;
        if(ans[u]!=INT_MAX && ans[u]+wt<ans[v]){
            cout<<"Negative cycle detected\n";
            return;
        }
    }
    print(ans,v);
    return;
}
int main(){
    int v,e;
    cout<<"Enter number of vertices: ";
    cin>>v;
    cout<<"Enter number od edges: ";
    cin>>e;
    struct Graph* graph=creategraph(v,e);
    for(int i=0;i<e;i++){
        cout<<"Enter Source of edge: ";
        cin>>graph->edge[i].src;
        cout<<"Enter Destination of edge: ";
        cin>>graph->edge[i].dest;
        cout<<"Enter Weight of edge: ";
        cin>>graph->edge[i].wt;    
    }
    bellman_ford(graph,0);
}
