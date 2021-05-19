package org.example.redistest.webfluxtest;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

public class ResourceNode {
    private String parentFqn;
    private String name;
    private List<ResourceNode> children;

    public static final String RES_SEP = ":";

    public static final String APP_SEP = "|";

    public ResourceNode(String name, String parentFqn) {
        this.name = name;
        this.parentFqn = parentFqn;
        this.children = new ArrayList<ResourceNode>();
    }

    public String getParentFqn() {
        return parentFqn;
    }

    public String getName() {
        return name;
    }

    public String getFqn() {
        if (parentFqn.contains(APP_SEP)) {
            return parentFqn + RES_SEP + name;
        } else {
            return parentFqn + APP_SEP + name;
        }
    }

    public List<ResourceNode> getChildren() {
        return children;
    }

    public void addChild(ResourceNode child) {
        children.add(child);
    }

    public List<ResourceNode> getDescendants() {
        List<ResourceNode> results = new ArrayList<ResourceNode>();
        results.addAll(this.children);
        /*for (ResourceNode child : children) {
            results.addAll(child.getDescendants());
        }*/

        try {
            int i = 0;
            ResourceNode child = results.get(i);
            while (null != child) {
                results.addAll(child.getChildren());
                i++;
                child = results.get(i);
            }
        } catch (IndexOutOfBoundsException e) {

        }
        return results;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ResourceNode that = (ResourceNode) o;
        return parentFqn.equals(that.parentFqn) && name.equals(that.name);
    }

    @Override
    public int hashCode() {
        return Objects.hash(parentFqn, name);
    }
}
