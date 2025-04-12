import { Route, Routes } from "react-router-dom";
import React from "react";

// サブディレクトリを含む動的インポート
const pages = import.meta.glob('./routes/**/*.tsx');
const layouts = import.meta.glob('./routes/**/Layout.tsx', { eager: true });

const App: React.FC = () => {
    return (
        <Routes>
            {Object.keys(pages).map((path) => {
                const Component = React.lazy(pages[path] as () => Promise<{ default: React.ComponentType<any> }>);
                const routePath = path
                    .replace('./routes', '')
                    .replace('.tsx', '')
                    .replace(/\[([^\]]+)\]/g, ':$1')
                    .toLowerCase(); // ルートパスを小文字に変換

                // 最も近いLayoutを探す
                const layoutPath = Object.keys(layouts).reduce((closest, layoutPath) => {
                    if (path.startsWith(layoutPath.replace('/Layout.tsx', ''))) {
                        return layoutPath.length > (closest?.length || 0) ? layoutPath : closest;
                    }
                    return closest;
                }, undefined as string | undefined);

                const LayoutComponent = layoutPath ? (layouts[layoutPath] as { default: React.ComponentType<any> }).default : React.Fragment;

                return (
                    <Route
                        key={routePath}
                        path={routePath === '/home' ? '/' : routePath}
                        element={
                            <React.Suspense fallback={<div>Loading...</div>}>
                                <LayoutComponent>
                                    <Component />
                                </LayoutComponent>
                            </React.Suspense>
                        }
                    />
                );
            })}
            <Route path="*" element={<div>404 - Page Not Found</div>} />
        </Routes>
    );
};

export default App;