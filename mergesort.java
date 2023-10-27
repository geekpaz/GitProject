public class MergeSort {

    public static void mergeSort(int[] array) {
        if (array == null || array.length <= 1) {
            return; // No need to sort an empty or single-element array.
        }

        int n = array.length;
        int[] temp = new int[n];
        mergeSort(array, temp, 0, n - 1);
    }

    private static void mergeSort(int[] array, int[] temp, int left, int right) {
        if (left < right) {
            int mid = (left + right) / 2;
            mergeSort(array, temp, left, mid);
            mergeSort(array, temp, mid + 1, right);
            merge(array, temp, left, mid, right);
        }
    }

    private static void merge(int[] array, int[] temp, int left, int mid, int right) {
        for (int i = left; i <= right; i++) {
            temp[i] = array[i];
        }

        int i = left;
        int j = mid + 1;
        int k = left;

        while (i <= mid && j <= right) {
            if (temp[i] <= temp[j]) {
                array[k] = temp[i];
                i++;
            } else {
                array[k] = temp[j];
                j++;
            }
            k++;
        }

        while (i <= mid) {
            array[k] = temp[i];
            i++;
            k++;
        }
    }

    public static void main(String[] args) {
        int[] array = {12, 11, 13, 5, 6, 7};

        System.out.println("Original Array:");
        for (int num : array) {
            System.out.print(num + " ");
        }

        mergeSort(array);

        System.out.println("\nSorted Array:");
        for (int num : array) {
            System.out.print(num + " ");
        }
    }
}
